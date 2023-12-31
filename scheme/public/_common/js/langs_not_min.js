window.S = {
  'USER': {
    'name': '{$USERNAME_escaped}',
    'email': '{$USER_EMAIL_escaped}'
  },
  'LANG': '{$LANG}',
  'CURRENCY': {
    'name': '{$CURRENCY}',
    'base': '{$CURRENCY_PRIMARY.key}',
    'rate': {$CURRENCY_RATE},
    'decimal': {
      'separator': '{$DEC_SEPARATOR_escaped}',
      'hide': '{$DEC_HIDE}'
    },
    'thousand': '{$TH_SEPARATOR_escaped}',
    'rates': [
      {LOOP FROM=$CURRENCIES VALUE=CURRENCY KEY=NAME INDEX=INDEX}
        {IF $INDEX > 1},{/IF}
        {
          'name': '{$NAME}',
          'rate': {$CURRENCY.rate}
        }
      {/LOOP}
    ],
    'used': {
      {LOOP FROM=$CURRENCIES VALUE=CURRENCY KEY=NAME}
        {IF $CURRENCY.selected}
          'name': '{$NAME}',
          'symbol': '{$CURRENCY.sym}'
        {/IF}
      {/LOOP}
    }
  },
  'UPLOAD_PATH': '{$UPLOAD_DIR}',
  {IF $WIN_POPUP_SHOW}
    'POPUP': {
      'message': '{$L_WINPOPUP_HTML_escaped}',
      'delay': {$WIN_POPUP_DELAY}
    },
  {/IF}
  {IF $NEWSLETTER_POPUP_SHOW}
    'NEWSLETTER': {
      'message': '{$L_NEWSLETTER_POPUP_CONTENT_escaped}',
      'delay': {$NEWSLETTER_POPUP_DELAY}
    },
  {/IF}
  {IF !empty($MESSAGE_ALERT)}
    'MESSAGES': [
      {LOOP FROM=$MESSAGE_ALERT VALUE=MSG INDEX=INDEX}
        {IF $INDEX > 1},{/IF}
        {
          'title': '{$MSG.title_escaped}',
          'content': '{$MSG.content_escaped}',
          'type': '{$MSG.type}'
        }
      {/LOOP}
    ],
  {/IF}
  {IF !empty($ERRORS)}
    'ERRORS': [
      {LOOP FROM=$ERRORS VALUE=ERROR INDEX=INDEX}
        {IF $INDEX > 1},{/IF}
        {
          'title': '{$L_ERROR_UNEXPECTED_ERROR_escaped}',
          'content': '{$ERROR_escaped}',
          'type': 'error'
        }
      {/LOOP}
    ],
  {/IF}
  'HURT_PRICE': {
    'type': '{$PRICE_TYPE}',
    'text': '{$HIDDE_PRICE_TEXT_escaped}'
  },
  'TAX': 23
};

window.L = {
  'YES': '{$L_YES_escaped}',
  'NO': '{$L_NO_escaped}',
  'NET': '{$L_NET_escaped}',
  'GROSS': '{$L_GROSS_escaped}',
  'USER_CITY': '{$L_USER_CITY_escaped}',
  'USER_STREET2': '{$L_STREET_escaped}',
  'ASQ_QUESTION': '{$L_ASQ_QUESTION_escaped}',
  'INFORMATION': '{$L_INFORMATION_escaped}',
  'PDF_THIRD_INFO': '{$L_PDF_THIRD_INFO_escaped}',
  'BACK_SHOPPING': '{$L_BACK_SHOPPING_escaped}',
  'LOGIN_SERVICE_NO_VALIDATE': '{$L_LOGIN_SERVICE_NO_VALIDATE_escaped}',
  'CONTINUE_SHOPPING': '{$L_CONTINUE_SHOPPING_escaped}',
  'MAKE_ORDER': '{$L_MAKE_ORDER_escaped}',
  'PRODUCT_ADDED': '{$L_PRODUCT_ADDED_escaped}',
  'PRODUCT_ADDED_E_AMOUNT': '{$L_PRODUCT_ADDED_E_AMOUNT_escaped}',
  'PRODUCT_ADDED_TO_STORE': '{$L_PRODUCT_ADDED_TO_STORE_escaped}',
  'PRODUCT_REMOVED_FROM_STORE': '{$L_PRODUCT_REMOVED_FROM_STORE_escaped}',
  'PRODUCT_WAS_NOT_EVALUATED': '{$L_PRODUCT_WAS_NOT_EVALUATED_escaped}',
  'ADD_RATING_MUST_BE_COMPLETED_WITH_SIGNATURE': '{$L_ADD_RATING_MUST_BE_COMPLETED_WITH_SIGNATURE_escaped}',
  'ADD_RATING_MUST_BE_COMPLETED_WITH_ALL_SIGNATURES': '{$L_ADD_RATING_MUST_BE_COMPLETED_WITH_ALL_SIGNATURES_escaped}',
  'INPUT_EMAIL': '{$L_INPUT_EMAIL_escaped}',
  'EMAIL': '{$L_EMAIL_escaped}',
  'ADD_ADDRESS': '{$L_ADD_ADDRESS_escaped}',
  'SIGNATURE': '{$L_SIGNATURE_escaped}',
  'LOGIN2': '{$L_LOGIN2_escaped}',
  'SEND': '{$L_SEND_escaped}',
  'FILTER': '{$L_FILTER_escaped}',
  'CHANGE': '{$L_CHANGE_escaped}',
  'APPLY': '{$L_APPLY_escaped}',
  'SELECT': '{$L_SELECT_escaped}',
  'CONTACT': '{$L_CONTACT_escaped}',
  'YOU_ARE_US_ON': '{$L_YOU_ARE_US_ON_escaped}',
  'NOT_SELECTED': '{$L_NOT_SELECTED_escaped}',
  'DAYS': '{$L_DAYS_escaped}',
  'PRICE_FROM': '{$L_PRICE_FROM_escaped}',
  'PRICE_TO': '{$L_PRICE_TO_escaped}',
  'PARAMETERS_LIST': '{$L_PARAMETERS_LIST_escaped}',
  'SELECT_BANK': '{$L_SELECT_BANK_escaped}',
  'RATING_HAS_BEEN_ADDED': '{$L_RATING_HAS_BEEN_ADDED_escaped}',
  'YOU_CAN_PAY_FOR_UP_TO_POINTS': '{$L_YOU_CAN_PAY_FOR_UP_TO_POINTS_escaped}',
  'REGISTRATION_WAS_SUCCESSFUL': '{$L_REGISTRATION_WAS_SUCCESSFUL_escaped}',
  'LOGIN_ERRORS': '{$L_LOGIN_ERRORS_escaped}',
  'OPT_REQIRED_INFO': '{$L_OPT_REQIRED_INFO_escaped}',
  'FIRST_SELECT_CITY': '{$L_FIRST_SELECT_CITY_escaped}',
  'PLEASE_TRY_AGAIN': '{$L_PLEASE_TRY_AGAIN_escaped}',
  'NOT_AWARD_NEW_POINTS': '{$L_NOT_AWARD_NEW_POINTS_escaped}',
  'RESIGN_WITH_NEWSLETTER': '{$L_RESIGN_WITH_NEWSLETTER_escaped}',
  'CONFIRM_REMOVE_NEWSLETTER': '{$L_CONFIRM_REMOVE_NEWSLETTER_escaped}',
  'NUMBER_WAS_SENT': '{$L_NUMBER_WAS_SENT_escaped}',
  'EMAIL_WAS_SENT': '{$L_EMAIL_WAS_SENT_escaped}',
  'EMAIL_WAS_SAVE': '{$L_EMAIL_WAS_SAVE_escaped}',
  'COUPON_ACTIVATE': '{$L_COUPON_ACTIVATE_escaped}',
  'AFTER_YOU_PAY_THE_ORDER_WILL_RECEIVE': '{$L_AFTER_YOU_PAY_THE_ORDER_WILL_RECEIVE_escaped}',
  'CONDITIONAL_ACCESS_STORE': '{$L_CONDITIONAL_ACCESS_STORE_escaped}',
  'SHOP_TEMPORARILY_UNAVAILAbLE': '{$L_SHOP_TEMPORARILY_UNAVAILAbLE_escaped}',
  'WRONG_PASSWORD_NOT_SAME': '{$L_WRONG_PASSWORD_NOT_SAME_escaped}',
  'NO_PRODUCTS_IN_CATEGORY': '{$L_NO_PRODUCTS_IN_CATEGORY_escaped}',
  'ERROR_REQUIRED_FIELD': '{$L_ERROR_REQUIRED_FIELD_escaped}',
  'ERROR_EMAIL_IS_INVALID': '{$L_ERROR_EMAIL_IS_INVALID_escaped}',
  'ERROR_POSTCODE_IS_INVALID': '{$L_ERROR_POSTCODE_IS_INVALID_escaped}',
  'ERROR_STREET_ADDRESS_NR_IS_INVALID': '{$L_ERROR_STREET_ADDRESS_NR_IS_INVALID_escaped}',
  'ERROR_PHONE_IS_INVALID': '{$L_ERROR_PHONE_IS_INVALID_escaped}',
  'ERROR_MIN_CHAR': '{$L_ERROR_MIN_CHAR_escaped}',
  'ERROR_MAX_CHAR': '{$L_ERROR_MAX_CHAR_escaped}',
  'ERROR_SELECT_PAYMENT_METHOD': '{$L_ERROR_SELECT_PAYMENT_METHOD_escaped}',
  'ERROR_SELECT_BANK': '{$L_ERROR_SELECT_BANK_escaped}',
  'ERROR_SELECT_DELIVERY_METHOD': '{$L_ERROR_SELECT_DELIVERY_METHOD_escaped}',
  'ERROR_SELECT_DELIVERY_CITY': '{$L_ERROR_SELECT_DELIVERY_CITY_escaped}',
  'ERROR_SELECT_DELIVERY_STREET': '{$L_ERROR_SELECT_DELIVERY_STREET_escaped}',
  'ERROR_UNEXPECTED_ERROR': '{$L_ERROR_UNEXPECTED_ERROR_escaped}',
  'ERROR_CRITICAL_MESSAGE': '{$L_ERROR_CRITICAL_MESSAGE_escaped}',
  'ERROR_TAX_NUMBER_IS_INVALID': '{$L_ERROR_TAX_NUMBER_IS_INVALID_escaped}',
  'OPTION_REQUIRED_FILL' : '{$L_OPTION_REQUIRED_FILL}',
  'TEXT_OPTION_MAX_LENGTH' : '{$L_TEXT_OPTION_MAX_LENGTH}',
  'PAYPAL_TRANSACTION_VERIFY': '{$L_PAYPAL_TRANSACTION_VERIFY}',
  'PAYPAL_FINISH': '{$L_PAYPAL_FINISH}',
  'UNSUBSCRIBE_NEWSLETTER': '{$L_UNSUBSCRIBE_NEWSLETTER}',
  'FIND_SELECT_PARCEL_LOCER': '{$L_FIND_SELECT_PARCEL_LOCER_escaped}',
  'FIND_SELECT_POINT': '{$L_FIND_SELECT_POINT_escaped}',
  'SELECT_PARCEL_LOCKER_MAP': '{$L_SELECT_PARCEL_LOCKER_MAP_escaped}',
  'SELECT_POINT_MAP': '{$L_SELECT_POINT_MAP_escaped}',
  'MAXIMUM_QUANTITY_REACHED': '{$L_MAXIMUM_QUANTITY_REACHED_escaped}',
  'MINIMUM_QUANTITY_REACHED': '{$L_MINIMUM_QUANTITY_REACHED_escaped}',
  'MORE' : '{$L_MORE}',
  'ERROR_SELECT_REGISTER_METHOD': '{$L_ERROR_SELECT_REGISTER_METHOD}',
  'LOGIN_SUCCESS': '{$L_LOGIN_SUCCESS}',
  'LOGIN_REQUIRE': '{$L_LOGIN_REQUIRE}',
  'ERROR_NOT_UNIQUE': '{$L_ERROR_NOT_UNIQUE_escaped}',
  'DPD_PICKUP_POINT_MAP': '{$L_DPD_PICKUP_POINT_MAP}',
  'NOT_SELECTED_DELIVERY_METHOD': '{$L_NOT_SELECTED_DELIVERY_METHOD}',
  'GLS_PICKUP_POINT_MAP': '{$L_GLS_PICKUP_POINT_MAP}',
  'NOTIFICATION_EXIST_FOR_EMAIL': '{$L_NOTIFICATION_EXIST_FOR_EMAIL}',
  'SUB_PRODUCTS_SHOW_CART': '{$L_SUB_PRODUCTS_SHOW_CART}',
  'SUB_PRODUCTS_HIDE_CART' : '{$L_SUB_PRODUCTS_HIDE_CART}',
  'PRODUCT': '{$L_PRODUCT_escaped}',
  'NO_PARAMETERS_SUBPRODUCT_SELECTED': '{$L_NO_PARAMETERS_SUBPRODUCT_SELECTED_escaped}',
  'ADD_TO_STORE': '{$L_ADD_TO_STORE}',
  'PRODUCT_IN_STORE': '{$L_PRODUCT_IN_STORE}',
  'PRODUCT_SHIPMENT_COUNTER_PERIOD' : '{$L_PRODUCT_SHIPMENT_COUNTER_PERIOD}',
  'PRODUCT_SHIPMENT_COUNTER_TODAY' : '{$L_PRODUCT_SHIPMENT_COUNTER_TODAY}',
  'PRODUCT_SHIPMENT_COUNTER_TOMORROW' : '{$L_PRODUCT_SHIPMENT_COUNTER_TOMORROW}',
  'PRODUCT_SHIPMENT_COUNTER_AFTER_TOMORROW' : '{$L_PRODUCT_SHIPMENT_COUNTER_AFTER_TOMORROW}',
  'HOURS' : '{$L_HOURS}',
  'MINUTES' : '{$L_MINUTES}',
  'SECONDS' : '{$L_SECONDS}',
};


