from django.shortcuts import render
from django.http import HttpResponse
from .models import *
# Create your views here.

def home(request):

    return render(request, 'pages/home.html',{"students":Students.objects.all()})