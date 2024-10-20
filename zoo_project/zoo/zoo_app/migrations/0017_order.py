# Generated by Django 5.1.1 on 2024-10-15 12:40

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zoo_app', '0016_alter_birdfood_count_product_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Имя')),
                ('email', models.EmailField(max_length=254)),
                ('address', models.CharField(max_length=250, verbose_name='Адрес')),
                ('phone', models.CharField(max_length=20, verbose_name='Телефон для связи')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания заказа')),
                ('paid', models.BooleanField(default=False, verbose_name='Оплата товара')),
                ('comment', models.TextField(blank=True, null=True, verbose_name='Комментарий к заказу')),
                ('order_cost', models.DecimalField(decimal_places=2, max_digits=9, verbose_name='Стоимость заказа')),
                ('order_items', models.JSONField(blank=True, default=dict)),
                ('text_orders', models.TextField(blank=True, null=True, verbose_name='Заказ в текстовом виде')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Покупатель')),
            ],
            options={
                'verbose_name': 'Заказ',
            },
        ),
    ]
