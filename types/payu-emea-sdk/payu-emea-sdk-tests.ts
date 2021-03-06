const options = {
    style: {
        basic:  {
            fontColor: '#aaccdd',
            fontSize: '12pt',
            fontFamily: 'Arial',
            letterSpacing: '2px',
            fontWeight: 'bold' as const
        },
        invalid:  {
            fontColor: '#aaccdd',
            fontWeight: 'bold' as const
        },
        focus:  {
            fontColor: '#aaccdd',
            fontWeight: 'bold' as const
        },
        placeholder:  {
            fontColor: '#aaccdd',
            fontWeight: 'bold' as const
        },
        disabled:  {
            fontColor: '#aaccdd',
            fontWeight: 'bold' as const
        }
    },
    placeholder: {
        number: 'CARD NUMBER',
        date: 'EXP DATE',
        cvv: 'CVV',
    },
    lang: 'en' as const,
    disabled: false,
    cardIcon: false
};

const optionsWithError = {
    lang: 'xx'
};

const secureFormsOptions = {
    fonts: [
        {
            family: 'Family 1',
            src: 'url(http://family1) type("woff2")'
        },
        {
            family: 'Family 2',
            src: 'url(http://family2) type("woff2")'
        }
    ]
};

const secureFormsOptionsError = {
    fonts: [
        {
            family: 'Family 1'
        }
    ]
};

// Init SDK
const payu = PayU('POS_ID');
PayU('POS_ID', {dev: true});
PayU(); // $ExpectError
PayU(123); // $ExpectError
PayU('POS_ID', {dev: 'on'}); // $ExpectError

// SDK functions
payu.extractRefReqId('URL_WITH_REF_REQ_ID');
payu.extractRefReqId(); // $ExpectError

payu.sendCvv('REF_REQ_ID');
payu.sendCvv(); // $ExpectError

payu.tokenize();
payu.tokenize('SINGLE');
payu.tokenize('UNKNOWN'); // $ExpectError

// Init Secure Forms
const secureForms = payu.secureForms();
payu.secureForms(secureFormsOptions);
payu.secureForms('options'); // $ExpectError
payu.secureForms(secureFormsOptionsError); // $ExpectError

// Add Secure Forms
const secureForm = secureForms.add();
secureForms.add('number');
secureForms.add('UNKNOWN'); // $ExpectError
secureForms.add('cvv', options);
secureForms.add('cvv', optionsWithError);  // $ExpectError

// Secure Form Functions
secureForm
    .render('#id')
    .focus()
    .clear()
    .remove()
    .update(options)
    .on('ready', () => {});

secureForm.render(); // $ExpectError
secureForm.update(optionsWithError); // $ExpectError
secureForm.on(); // $ExpectError
secureForm.on('xxxx'); // $ExpectError
secureForm.on('ready'); // $ExpectError
