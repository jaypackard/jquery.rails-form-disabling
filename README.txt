If rails fashion, if a form field's name ends with [_destroy], then selecting the checkbox will set that field to 0 so as not to destroy the record.  Unselecting the checkbox will set that field to 1 to destroy the record.  However, if there is no value for a field ending with the name [id], then this is not stored in the database so there is no need to destroy this record, so it sets all the inputs to disabled to avoid posting the fields altogether. 

Usage:
$('.disabling').disabling();
