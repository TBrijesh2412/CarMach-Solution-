# Generated by Django 5.1 on 2024-09-26 08:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car', '0017_delete_appointment'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('manufacturer', models.CharField(max_length=100)),
                ('model', models.CharField(max_length=100)),
                ('manufacturing_year', models.IntegerField()),
                ('fuel_type', models.CharField(max_length=50)),
                ('plan', models.CharField(blank=True, max_length=50, null=True)),
                ('registration_number', models.CharField(max_length=50)),
                ('selected_date', models.DateField()),
                ('selected_time', models.TimeField()),
                ('services', models.JSONField()),
                ('name', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=254)),
                ('picup', models.CharField(max_length=200)),
                ('drop', models.CharField(max_length=200)),
                ('message', models.TextField(blank=True, null=True)),
                ('price', models.CharField(max_length=100)),
            ],
        ),
    ]
