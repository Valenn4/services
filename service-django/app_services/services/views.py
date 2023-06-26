from django.shortcuts import render
from .models import Cordoba, Job, Service

# Create your views here.

def home(request):
    context = {
        'locations_cordoba': Cordoba.objects.all().order_by("name_location"),
        'jobs': Job.objects.all(),
    }
    return render(request, 'home.html', context)

def search(request, job):
    context = {
        'job': job,
        'services': Service.objects.all()
    }
    return render(request, 'search.html', context)

def service(request, id):
    context = {
        'service': Service.objects.get(id=id)
    }
    return render(request, 'service.html', context)