from django.db import models

# Create your models here.
class Service(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class SubService(models.Model):
    parentService = models.ForeignKey(Service, related_name='sub_services', to_field='name', on_delete=models.CASCADE,default=None)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='service_images/', blank=True, null=True)

    def __str__(self):
        return f"{self.name} ({self.parentService.name})"
    
class Appointment(models.Model):
    manufacturer = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    manufacturing_year = models.IntegerField()
    fuel_type = models.CharField(max_length=50)
    plan = models.CharField(max_length=50,blank=True,null=True)
    registration_number = models.CharField(max_length=50)
    selected_date = models.DateField()
    selected_time = models.TimeField()
    
    services = models.JSONField() 

    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    picup = models.CharField(max_length=200)
    drop = models.CharField(max_length=200)
    message = models.TextField(blank=True,null=True)
    price = models.CharField(max_length=100)

    def __str__(self):
        return f'Appointment for {self.name} on {self.selected_date}'
    
    
class FAQ(models.Model):
    question = models.CharField(max_length=255)
    answer = models.TextField()

    def __str__(self):
        return self.question


class ImageCategory(models.Model):
    category_name = models.CharField(max_length=255)

    def __str__(self):
        return self.category_name


class Image(models.Model):
    category = models.ForeignKey(ImageCategory, related_name="images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')
    alt = models.CharField(max_length=255)

    def __str__(self):
        return self.alt
    
# models.py
from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return self.name
