import os

from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.contrib.auth.models import AbstractUser


def get_clinic_image_path(instance, filename):
    return os.path.join('image/image_cat/', f"{instance.id_image}.png")

def get_clinic_image_path_dog(instance, filename):
    return os.path.join('image/image_dog_dry/', f"{instance.id_image}.png")

class DogFoodDry(models.Model):
    id_image = models.IntegerField(blank=True, default=0)
    count_product = models.IntegerField(blank=True, default=1, null=True)
    name = models.CharField(max_length=200, default="default title")
    title = models.CharField(max_length=200, default="default title")
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    age_of_the_animal = models.CharField(max_length=200)
    animal_size = models.CharField(max_length=200)
    availability = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(max_length=200, upload_to=get_clinic_image_path_dog, null=True)
    link = models.CharField(max_length=1000, default="default title")
    image_link = models.CharField(max_length=1000, default="default title", null=True)
    description = models.CharField(max_length=5000, default="default title")
    manufacturer = models.CharField(max_length=200, default="")
    sale = models.BooleanField(default=False)
    old_price = models.DecimalField(max_digits=5, decimal_places=2, null=True)

    class Meta:
        verbose_name = "Еда для собак"
        verbose_name_plural = "Еда для собак"



class CatFood(models.Model):
    id_image = models.IntegerField(blank=True, null=True, default=0)
    count_product = models.IntegerField(blank=True, null=True, default=1)
    name = models.CharField(max_length=200, default="default title")
    title = models.CharField(max_length=200, default="default title")
    weight = models.DecimalField(max_digits=5, decimal_places=3)
    age_of_the_animal = models.CharField(max_length=200)
    animal_size = models.CharField(max_length=200)
    availability = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(max_length=200, upload_to=get_clinic_image_path, null=True)
    link = models.CharField(max_length=1000, default="default title")
    image_link = models.CharField(max_length=1000, null=True,  default="default title")
    description = models.CharField(max_length=5000, default="default title")
    manufacturer = models.CharField(max_length=200, default="")
    sale = models.BooleanField(default=False)
    old_price = models.DecimalField(max_digits=5, decimal_places=2, null=True)

    class Meta:
        verbose_name = "Еда для кошек"
        verbose_name_plural = "Еда для кошек"



class BirdFood(models.Model):
    id_image = models.IntegerField(blank=True, default=0)
    count_product = models.IntegerField(blank=True, default=1, null=True)
    name = models.CharField(max_length=200, default="default title")
    title = models.CharField(max_length=200, default="default title")
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    age_of_the_animal = models.CharField(max_length=200)
    animal_size = models.CharField(max_length=200)
    availability = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(max_length=200, upload_to=get_clinic_image_path, null=True)
    link = models.CharField(max_length=1000, default="default title")
    image_link = models.CharField(max_length=1000, default="default title")
    description = models.CharField(max_length=5000, default="default title")
    manufacturer = models.CharField(max_length=200, default="")
    sale = models.BooleanField(default=False)
    old_price = models.DecimalField(max_digits=5, decimal_places=2, null=True)


class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    date_joined = models.DateField(auto_now_add=True)
    username = None

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"

class Order(models.Model):
    customer = models.ForeignKey(User, verbose_name='Покупатель', on_delete=models.CASCADE)
    name = models.CharField(max_length=50, verbose_name='Имя')
    email = models.EmailField()
    address = models.CharField(max_length=250, verbose_name='Адрес')
    phone = models.CharField(max_length=20, verbose_name='Телефон для связи')
    created = models.DateTimeField(editable=True, auto_now=True, verbose_name='Дата создания заказа')
    paid = models.BooleanField(default=False, verbose_name='Оплата товара')
    comment = models.TextField(verbose_name='Комментарий к заказу', null=True, blank=True)
    order_cost = models.DecimalField(verbose_name='Стоимость заказа', max_digits=9, decimal_places=2)
    text_orders = models.TextField(verbose_name='Заказ в текстовом виде', null=True, blank=True)
    choices_delivery = models.CharField(max_length=250, verbose_name='Способ доставки', null=True, blank=True)
    choices_paid = models.CharField(max_length=250, verbose_name='Способ оплаты', null=True, blank=True)

    class Meta:
        verbose_name = "Заказ"
        verbose_name_plural = "Заказы"

    def __str__(self):
        return f"Заказ №{self.id}"