# Generated by Django 5.1 on 2024-09-24 14:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('car', '0011_remove_image_image_image_src'),
    ]

    operations = [
        migrations.RenameField(
            model_name='image',
            old_name='src',
            new_name='image',
        ),
    ]
