<?php

function get_arr_value(array $object = [], string $key, $default = '') {
  return isset($object[$key]) ? $object[$key] : $default;
}
