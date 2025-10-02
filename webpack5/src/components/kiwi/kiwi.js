import kiwi from './kiwi.png';
import './kiwiimage.scss';

class Kiwi {
    render() {
        const img = document.createElement('img');  // <-- FIX
        img.src = kiwi;
        img.alt = 'Kiwi Image';
        img.classList.add('kiwi');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.append(img);
    }
}

export default Kiwi;