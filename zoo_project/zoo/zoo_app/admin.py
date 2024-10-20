from django.contrib import admin
from .models import DogFoodDry, CatFood, BirdFood, User, Order

# admin.site.register(DogFoodDry)
# admin.site.register(CatFood)
# admin.site.register(BirdFood)
# admin.site.register(User)
# admin.site.register(Order)
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'address', 'phone',
                    'created', 'order_cost', 'choices_delivery', 'choices_paid', 'paid')

@admin.register(DogFoodDry)
class DogFoodAdmin(admin.ModelAdmin):
    list_display = ('id_image', 'title')
    ordering = ('id_image',)


@admin.register(CatFood)
class DogFoodAdmin(admin.ModelAdmin):
    list_display = ('id_image', 'title')
    ordering = ('id_image',)

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'date_joined')
    ordering = ('name',)