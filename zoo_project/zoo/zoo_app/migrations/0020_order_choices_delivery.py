# Generated by Django 5.1.1 on 2024-10-17 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zoo_app', '0019_remove_order_order_items'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='choices_delivery',
            field=models.CharField(blank=True, max_length=250, null=True, verbose_name='Способ доставки'),
        ),
    ]
