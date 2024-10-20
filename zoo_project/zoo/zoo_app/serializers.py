from rest_framework import serializers
from .models import DogFoodDry, Order
from .models import CatFood
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password', 'date_joined', 'last_login']
        extra_kwargs = {
            "password": {"write_only": True}
        }


    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"

class DogFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = DogFoodDry
        fields = "__all__"

class CatFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatFood
        fields = "__all__"