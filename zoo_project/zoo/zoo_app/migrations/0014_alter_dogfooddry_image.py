# Generated by Django 5.1.1 on 2024-10-13 13:03

import zoo_app.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zoo_app', '0013_alter_user_date_joined'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dogfooddry',
            name='image',
            field=models.ImageField(max_length=200, null=True, upload_to=zoo_app.models.get_clinic_image_path_dog),
        ),
    ]
