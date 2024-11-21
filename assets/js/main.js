$(document).ready(function() {
    $('#textInput').on('input', function() {
        var charCount = $(this).val().length; // Получаем длину текста
        $('#charCount').text(charCount); // Обновляем счетчик символов
    });
});