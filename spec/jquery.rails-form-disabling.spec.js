describe('jquery.disabling', function () {

    var $form;

    afterEach(function () {
        $form.remove();
    });

    it('for an item with an ID, if unchecked set _destroy to 1 to destroy underlying record, otherwise 0', function() {
        $form = $('<form></form>');
        var $checkbox = $('<input type="checkbox"/>');
        $checkbox.appendTo($form);
        $('<input type="hidden" name="person[watched_movies_attributes][][id]" value="123"/>').appendTo($form);
        $('<input type="hidden" name="person[watched_movies_attributes][][_destroy]"/>').appendTo($form);
        $form.appendTo('body');
        $checkbox.rails_form_disabling();

        $checkbox.prop('checked', true).trigger('click');
        expect($("[name='person[watched_movies_attributes][][_destroy]']").val()).toEqual('0');

        $checkbox.prop('checked', false).trigger('click');
        expect($("[name='person[watched_movies_attributes][][_destroy]']").val()).toEqual('1');
    });

    it('for an item with a new record, if unchecked set disabled attribute so nothing is passed, otherwise remove disabled attribute', function() {
        $form = $('<form></form>');
        var $checkbox = $('<input type="checkbox"/>');
        $checkbox.appendTo($form);
        $('<input type="hidden" name="person[watched_movies_attributes][][id]"/>').appendTo($form);
        $('<input type="hidden" name="person[watched_movies_attributes][][_destroy]"/>').appendTo($form);
        $form.appendTo('body');
        $checkbox.rails_form_disabling();

        $checkbox.prop('checked', true).trigger('click');
        expect($("[name='person[watched_movies_attributes][][id]']").is(":disabled")).toBeFalsy();

        $checkbox.prop('checked', false).trigger('click');
        expect($("[name='person[watched_movies_attributes][][id]']").is(":disabled")).toBeTruthy();
    });

});