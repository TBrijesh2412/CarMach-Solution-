from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from .views import FAQAPIView, ServiceListView,SubServiceListView, ImageCategoryView,AppointmentCreateView,home
from .views import ContactCreateView

urlpatterns = [
    path("/",home(),name="home"),
    path('services/', ServiceListView.as_view(), name='service-list'),
    path('subservices/', SubServiceListView.as_view(), name='service-detail'),
    path('appointments/', AppointmentCreateView.as_view(), name='appointment-create'),
    path('faqs/', FAQAPIView.as_view(), name='faq-list'),
    path('images/', ImageCategoryView.as_view(), name='image-category-list'),
    path('contact/', ContactCreateView.as_view(), name='contact-create'),



] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

