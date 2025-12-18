from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework import status
from .models import FAQ, ImageCategory, Service,SubService
from .serializers import FAQSerializer, ImageCategorySerializer, ServiceSerializer,SubServiceSerializer,AppointmentSerializer
import pandas as pd
import os


class ServiceListView(APIView):
    def get(self, request):
        services = Service.objects.all()
        serializer = ServiceSerializer(services, many=True,context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

class SubServiceListView(APIView):
    def get(self, request):
        sub_services = SubService.objects.all()
        serializer = SubServiceSerializer(sub_services, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)


from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import AppointmentSerializer


class AppointmentCreateView(APIView):
    def post(self, request):
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            appointment = serializer.save()
            self.send_confirmation_email(appointment)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def send_confirmation_email(self, appointment):
        subject = 'Appointment Confirmation'
        message = f"""
        Hi {appointment.name},

        Your appointment has been successfully booked with the following details:

        Service Detail --
        - Manufacturer: {appointment.manufacturer}
        - Model: {appointment.model}
        - Year: {appointment.manufacturing_year}
        - Fuel Type: {appointment.fuel_type}
        - Plan: {appointment.plan}
        - Registration Number: {appointment.registration_number}
        - Appointment Date: {appointment.selected_date}
        - Appointment Time: {appointment.selected_time}

        Additional Services Selected --
        Services: {list(appointment.services.keys())}

        Personal Detail --
        Mobile No: {appointment.phone}        
        Pickup: {appointment.picup}
        Drop: {appointment.drop}
        Message: {appointment.message}
        Total Cost: {appointment.price}

        Thank you for choosing our service!

        Best regards,
        CarMach Solution
        """

        send_mail(
            subject,
            message,
            'btadhani2412@gmail.com',  # Ensure proper email configuration
            [appointment.email],
            fail_silently=False,
        )

        data = {
            'Name': [appointment.name],
            'Mobile No': [appointment.phone],
            'Pickup': [appointment.picup],
            'Drop': [appointment.drop],
            'Message': [appointment.message],
            'Appointment Date': [appointment.selected_date],
            'Appointment Time': [appointment.selected_time],
            'Service': [list(appointment.services.keys())],
            'Cost': [appointment.price],
            'Manufacturer': [appointment.manufacturer],
            'Model': [appointment.model],
            'Year': [appointment.manufacturing_year],
            'Fuel Type': [appointment.fuel_type],
            'Plan': [appointment.plan],
            'Registration Number': [appointment.registration_number],
        }

        data_new = pd.DataFrame(data)

        file_name = r'D:\car_machsolution\backend\carMech\Service_Data.xlsx'

        directory = os.path.dirname(file_name)
        if not os.path.exists(directory):
            os.makedirs(directory)

        if os.path.exists(file_name):
            existing_data = pd.read_excel(file_name)
            updated_data = pd.concat([existing_data, data_new], ignore_index=True)
        else:
            updated_data = data_new
        updated_data.to_excel(file_name, index=False)
        print("Data successfully written to Excel file.") 

class FAQAPIView(APIView):
    def get(self, request):
        faqs = FAQ.objects.all()
        serializer = FAQSerializer(faqs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = FAQSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ImageCategoryView(APIView):
    def get(self, request):
        categories = ImageCategory.objects.all()
        serializer = ImageCategorySerializer(categories, many=True)
        return Response(serializer.data)
    
# views.py
from rest_framework import generics
from .models import Contact
from .serializers import ContactSerializer

class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
