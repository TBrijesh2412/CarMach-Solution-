from django.contrib import admin
from .models import Service,SubService,FAQ ,ImageCategory,Image, Appointment,Contact
admin.site.register(Service)
admin.site.register(SubService)
admin.site.register(Appointment)
admin.site.register(FAQ)
admin.site.register(ImageCategory)
admin.site.register(Image)
admin.site.register(Contact)