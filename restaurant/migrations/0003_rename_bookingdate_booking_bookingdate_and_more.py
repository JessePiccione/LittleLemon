# Generated by Django 5.0.4 on 2024-04-24 22:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0002_rename_menu_menuitem'),
    ]

    operations = [
        migrations.RenameField(
            model_name='booking',
            old_name='BookingDate',
            new_name='bookingdate',
        ),
        migrations.RenameField(
            model_name='booking',
            old_name='Name',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='booking',
            old_name='No_of_guests',
            new_name='no_of_guests',
        ),
        migrations.RenameField(
            model_name='menuitem',
            old_name='Inventory',
            new_name='inventory',
        ),
        migrations.RenameField(
            model_name='menuitem',
            old_name='Price',
            new_name='price',
        ),
        migrations.RenameField(
            model_name='menuitem',
            old_name='Title',
            new_name='title',
        ),
    ]
