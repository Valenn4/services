from django.db import models

# Create your models here.

class Cordoba(models.Model):
    name_location = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.name_location

class Job(models.Model):
    name_job = models.CharField(max_length=100, blank=False)
    image = models.CharField(max_length=400, blank=False)
    def __str__(self):
        return self.name_job
    
class Service(models.Model):
    name_service = models.CharField(max_length=100, blank=False)
    category = models.ForeignKey(Job, blank=False, on_delete=models.CASCADE)
    city = models.CharField(max_length=200, blank=False)
    address = models.TextField(max_length=300, blank=False)
    latitude = models.FloatField(null= True)
    longitude = models.FloatField(null= True)
    owner = models.CharField(max_length=200, blank=False)
    schedule = models.CharField(max_length=100, blank=False)
    image = models.TextField(max_length=500, blank=False)
    rating = models.FloatField(blank=False)

    def __str__(self):
        return self.name_service