<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>

$('*', document.body).on('change', '[data-firetag]', function () {
    if ($(this).attr('data-firetag') != '') {
        var tagId = '' + $(this).attr('data-firetag');
        if (typeof undefined != typeof ($(this).attr('data-firetag-param'))) {
            fireTagParam = jQuery.parseJSON($(this).attr('data-firetag-param'));
        }
        var multipleTagIdIndex = tagId.indexOf(',');
        if (multipleTagIdIndex > -1) {
            var firstTagId = tagId.substring(0, multipleTagIdIndex);
            var secondTagId = tagId.substring((multipleTagIdIndex + 1));
            TOAnalytics.fire(firstTagId);
            TOAnalytics.fire(secondTagId, '');
        } else {
            TOAnalytics.fire(tagId);
        }
    }
});