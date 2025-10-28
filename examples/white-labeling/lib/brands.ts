interface Brand {
    name: string;
    logo: string;
    colors: {
        primary: string;
        secondary: string;
    }
}

const brands: Record<string, Brand> = {
    burton: {
        name: 'Burton',
        logo: 'https://brand.burton.com/wp-content/uploads/2020/06/Our-Logo-2.svg',
        colors: {
            primary: '#1a1a1a',
            secondary: '#02c'
        }
    },
    original: {
        name: 'Original Skateboards',
        logo: 'https://d2l36g7div3qnn.cloudfront.net/2018/12/Original-Skateboards-Logo-175.png',
        colors: {
            primary: '#D33D2E',
            secondary: '#A98B69'
        }
    },
    oakley: {
        name: 'Oakley',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Oakley_logo.svg',
        colors: {
            primary: '#000000',
            secondary: '#c83430'
        }
    },
}


export async function getBrandData(brand: string) {
    return brands[brand];
}