from .models import DogFoodDry
from .models import CatFood
from .serializers import DogFoodSerializer, OrderSerializer
from .serializers import CatFoodSerializer
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.views import APIView
from .serializers import UserSerializer
from .models import User
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime


class OrderView(APIView):
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
class RegisterView(APIView):
    def post(self, request):
        email = request.data['email']
        serializer = UserSerializer(data=request.data)
        if User.objects.filter(email=email).exists():
            raise AuthenticationFailed("Пользователь с этим адресом уже зарегистрирован!")
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("Пользователь не найден")

        if not user.check_password(password):
            raise AuthenticationFailed("Неправильный пароль")

        payload = {
            "id": user.id,
            "exp": datetime.datetime.now().astimezone() + datetime.timedelta(minutes=120),
            "iat": datetime.datetime.now().astimezone()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()

        response.set_cookie(key="jwt", value=token, httponly=True, samesite='None', secure=True)

        response.data = {
            "jwt": token
        }

        return response

class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get("jwt")
        if not token:
            raise AuthenticationFailed("Пользователь не авторизован")
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'], verify=False, options={'verify_signature': False, "verify_exp": True})
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Пользователь не авторизован")

        user = User.objects.filter(id=payload["id"]).first()

        serializer = UserSerializer(user)

        return Response(serializer.data)

class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': "Вы успешно разлогинены"
        }
        return response


class DogViewSet(viewsets.ModelViewSet):
    queryset = DogFoodDry.objects.all()
    serializer_class = DogFoodSerializer



class CatViewSet(viewsets.ModelViewSet):
    queryset = CatFood.objects.all()
    serializer_class = CatFoodSerializer







