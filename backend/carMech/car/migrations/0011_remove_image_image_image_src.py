# Generated by Django 5.1 on 2024-09-24 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car', '0010_remove_image_src_image_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='image',
            name='image',
        ),
        migrations.AddField(
            model_name='image',
            name='src',
            field=models.ImageField(blank=True, null=True, upload_to='Gallary_images/'),
        ),
    ]