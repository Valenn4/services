from django.contrib import admin
from .models import Cordoba, Job, Service                   

# Register your models here.

admin.site.register(Cordoba)
admin.site.register(Job)
admin.site.register(Service)