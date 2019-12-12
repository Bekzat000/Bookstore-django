from django.db import models

# Create your models here.

class Genre(models.Model):
    genre_name = models.CharField(max_length=100)
    def __str__(self):
        return self.genre_name


class User(models.Model):
    user_name = models.CharField(max_length=64)
    user_surname = models.CharField(max_length=64, default="UNKNOWN")
    user_login = models.CharField(max_length=64)
    user_password = models.CharField(max_length=64, default="qwe123ASD")
    user_url_image = models.CharField(max_length=1000, default='mainapp\images\defaultuser.png')
    user_role = models.CharField(max_length=32, default='user')
    user_status = models.CharField(max_length=16, default='not banned')

    def __str__(self):
        return self.user_name


class Country(models.Model):
    country_name = models.CharField(max_length=100)

    def __str__(self):
        return self.country_name


class Category(models.Model):
    PARAMETERS = (
        ('book_main_rating', 'book_main_rating'),
        ('book_critics_raing', 'book_critics_raing'),
        ('book_user_rating', 'book_user_rating'),
        ('book_year', 'book_year')
    )
    category_name = models.CharField(max_length=100)
    category_order_by_parameter = models.CharField(max_length=32, choices=PARAMETERS, default='book_main_rating')

    def __str__(self):
        return self.category_name


class Volume(models.Model):
    volume = models.CharField(max_length=100)
    chapter = models.CharField(max_length=100)

    def __str__(self):
        return self.chapter


class Book(models.Model):
    book_name = models.CharField(max_length=100)
    book_author = models.CharField(max_length=100)
    book_desctiption = models.TextField()
    book_url_image = models.CharField(max_length=1000)
    book_year = models.DateField()
    book_price =  models.CharField(max_length=100)
    book_publisher = models.CharField(max_length=100)
    book_categories = models.OneToOneField(Category, on_delete=models.CASCADE)
    book_country = models.OneToOneField(Country, on_delete=models.CASCADE)
    book_image = models.ImageField(blank=True, null=True, default=None, upload_to="images/books")
    book_user_rating = models.FloatField(default=0.0)
    book_main_rating = models.FloatField(default=0.0)
    book_critics_raing = models.FloatField(default=0.0)

    def __str__(self):
        return self.book_name


class Manga_comics(models.Model):
    manga_comics_name = models.CharField(max_length=100)
    manga_comics_desctiption = models.TextField()
    manga_url_image = models.CharField(max_length=1000)
    manga_comics_year = models.DateField()
    manga_comics_categories = models.OneToOneField(Category, on_delete=models.CASCADE)
    manga_comics_volume =  models.OneToOneField(Volume, on_delete=models.CASCADE)
    manga_comics_price = models.CharField(max_length=100)

    def __str__(self):
        return self.manga_comics_name


class Magazine(models.Model):
    magazine_name =  models.CharField(max_length=100)
    magazine_year = models.DateField()
    magazine_url_image = models.CharField(max_length=1000)
    magazine_categories = models.OneToOneField(Category, on_delete=models.CASCADE)
    magazine_country = models.OneToOneField(Country, on_delete=models.CASCADE)
    magazine_chapter = models.CharField(max_length=100)
    magazine_price =  models.CharField(max_length=100)

    def __str__(self):
        return self.magazine_name


class Favorite_book(models.Model):
    favorite_user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    favorite_book = models.ForeignKey(Book, on_delete=models.CASCADE, default=None)

    def __str__(self):
        return self.favorite_book


class Favorite_manga(models.Model):
    favorite_user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    favorite_manga = models.ForeignKey(Manga_comics, on_delete=models.CASCADE, default=None)

    def __str__(self):
        return self.favorite_manga


class Favorite_magazine(models.Model):
    favorite_user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    favorite_magazine = models.ForeignKey(Magazine, on_delete=models.CASCADE, default=None)

    def __str__(self):
        return self.favorite_magazine



class Rating(models.Model):
    rating_user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating_book = models.ForeignKey(Book, on_delete=models.CASCADE)
    rating_number = models.IntegerField()