# Generated by Django 5.1 on 2024-09-24 05:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car', '0005_appointment'),
    ]

    operations = [
        migrations.CreateModel(
            name='FAQ',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=255)),
                ('answer', models.TextField()),
            ],
        ),
    ]
