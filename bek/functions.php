<?php
// функция защитника 
function strip_data($text)
{
    $quotes = array ("\x27", "\x22", "\x60", "\t", "\n", "\r", "*", "%",
        "<", ">", "?", "!" );
    $goodquotes = array ("-", "+", "#" );
    $text = trim( strip_tags( $text ) );
    $text = str_replace( $quotes, '', $text );
    $text = str_replace( $goodquotes, '', $text );
    $text = htmlspecialchars($text ); 
    return $text;
}
// функция смены кодировки
function mb_strrev($str, $encoding='UTF-8'){
    return mb_convert_encoding( strrev( mb_convert_encoding($str, 'UTF-16BE', $encoding) ), $encoding, 'UTF-16LE');
}
// функция проверки на наличие палиндромов
function test_alter(&$item1)
{
    $string = str_replace(' ', '', $item1);
    if ($string !== mb_strrev($string)){
        $item1 = '';
    }
    if (mb_strlen($item1)<3){
        $item1 = '';
    }
    
}
// функция поиска палиндрома
function palindrom($text)
{
// переводим в нижний ригистр
$text=mb_strtolower($text);
// задаем массив по каждому слову
$text1=explode(" ",$text );
// задаем массив по предложениям
$text2=explode(". ", $text);
// преобразуем весь текст в массив
$text3=str_split($text);
// объеденяем массивы
$text=array_merge($text1, $text2,$text3);
// удаяем знаки препинания
$text=preg_replace('/\pP/iu', '', $text);
// удаляем повтроры
$text=array_unique($text);
// удаляем пустые значения
$text = array_diff($text, array('', NULL, false));
// сравниваем на наличие Палиндром
array_walk($text, 'test_alter');
// удаляем пустые значения
$text=array_diff($text, array('', NULL, false));
$text=array_values($text);
return $text;
}