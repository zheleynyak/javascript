let color = prompt('enter color');

switch (color) {
    case 'green':
        console.log('go');
        break;
    case 'yellow':
        console.log('waiting');
        break;
    case 'red':
        console.log('stop')
        break;
    default:
        console.log('error');
        break;
}