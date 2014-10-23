Use this jQuery plugin if wish to include a data model instance as nested attributes in a form as a group of inputs, and you want the user to select whether you wish to include that instance, controlled with a checkbox.

In rails fashion, if the model contains a field ending with the name [_destroy], then selecting the checkbox will set that field to 0 so as not to destroy the record.  Unselecting the checkbox will set that field to 1 to destroy the record.  However, if there is no value for a field ending with the name [id], then there is no need to destroy this record, so it sets all the inputs to disabled to avoid posting them.

Usage:
$('.disabling').disabling();
