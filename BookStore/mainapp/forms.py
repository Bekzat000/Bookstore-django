from django import forms
from .models import *


class UploadImageForm(forms.Form):
    image = forms.ImageField()


class CreateBookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = [
            'book_name',
            'book_desctiption',
            'book_country',
            'book_price',
            'book_year',
            'book_author',
            'book_publisher',
            'book_categories',
            'book_image',
        ]
