'use strict';

document.getElementById('success').addEventListener('click', () => {
    document.getElementById('success').classList.add('successbox');
    document.getElementById('fail1').classList.add('cantclick');
    document.getElementById('fail2').classList.add('cantclick');
    document.getElementById('succcess').classList.add('cantclick');

});

document.getElementById('fail1').addEventListener('click', () => {
    document.getElementById('fail1').classList.add('failbox');
    document.getElementById('success').classList.add('cantclick');
    document.getElementById('fail2').classList.add('cantclick');
    document.getElementById('fail1').classList.add('cantclick');
});

document.getElementById('fail2').addEventListener('click', () => {
    document.getElementById('fail2').classList.add('failbox');
    document.getElementById('fail1').classList.add('cantclick');
    document.getElementById('success').classList.add('cantclick');
    document.getElementById('fail2').classList.add('cantclick');
});
