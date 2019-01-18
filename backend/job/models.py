from django.db import models
from django.contrib.auth.models import User


def source_file(instance, filename):
    return '/'.join(['photos', str(instance.id), filename])


class Job(models.Model):
    title = models.CharField(max_length=100, blank=True, default='Title')
    image = models.ImageField(upload_to=source_file, max_length=255, blank=True, null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, related_name='user_job', on_delete=models.CASCADE)
    description = models.TextField(verbose_name="Job description", blank=True)
    validated = models.BooleanField(default=False)

