# Generated by Django 5.1.1 on 2024-09-22 08:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zoo_app', '0004_alter_catfood_image_alter_catfood_image_link_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catfood',
            name='id_image',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]