# Generated by Django 2.2.6 on 2019-12-11 18:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0002_book_book_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating_number', models.IntegerField()),
                ('rating_book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.Book')),
                ('rating_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.User')),
            ],
        ),
    ]
