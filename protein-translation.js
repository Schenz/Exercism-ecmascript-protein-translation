export default function translate(rna) {
    const map = {
        'AUG': 'Methionine',
        'UUU': 'Phenylalanine',
        'UUC': 'Phenylalanine',
        'UUA': 'Leucine',
        'UUG': 'Leucine',
        'UCU': 'Serine',
        'UCC': 'Serine',
        'UCA': 'Serine',
        'UCG': 'Serine',
        'UAU': 'Tyrosine',
        'UAC': 'Tyrosine',
        'UGU': 'Cysteine',
        'UGC': 'Cysteine',
        'UGG': 'Tryptophan',
        'UAA': 'STOP',
        'UAG': 'STOP',
        'UGA': 'STOP'
    };

    if (!rna) {
        return [];
    }

    let rnaArray = rna.match(/.{1,3}/g);
    let returnProtein = [];
    let i;
    
    for (i = 0; i < rnaArray.length; i++) {
        let value = map[rnaArray[i]] || 'ERROR';

        if (value === 'ERROR') {
            throw new Error('Invalid codon')
        }
        
        if (value === 'STOP') {
            break;
        } else {
            returnProtein.push(value);
        }
    }

    return returnProtein;
}
