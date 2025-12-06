from rest_framework import serializers
from .models import Service, SubService , FAQ , Image , ImageCategory ,Appointment


class SubServiceSerializer(serializers.ModelSerializer):
    parentService = serializers.SlugRelatedField(
        slug_field='name',
        queryset=Service.objects.all()
    )

    class Meta:
        model = SubService
        fields = ['name', 'description', 'image', 'parentService']

class ServiceSerializer(serializers.ModelSerializer):
    sub_services = SubServiceSerializer(many=True, read_only=True) 

    class Meta:
        model = Service
        fields = ['name', 'sub_services']


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__' 
        
class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer']

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'category', 'image', 'alt']


class ImageCategorySerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = ImageCategory
        fields = ['id', 'category_name', 'images']
        
# serializers.py
from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['name', 'phone', 'email', 'subject', 'message']
