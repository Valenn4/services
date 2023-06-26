from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('', views.home),
    path('search/<str:job>', views.search),
    path('service/<int:id>', views.service)
]
