from django.urls import path, include
from . import views
from rest_framework import routers
from .views import DogViewSet, CatViewSet, RegisterView, LoginView, UserView, LogoutView, OrderView

router_dog = routers.DefaultRouter()
router_cat = routers.DefaultRouter()

router_dog.register("dog_food", DogViewSet, basename="dog_food")
router_cat.register("cat_food", CatViewSet, basename="cat_food")

urlpatterns = [
    path('', include(router_dog.urls)),
    path('', include(router_cat.urls)),
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('order', OrderView.as_view()),

]