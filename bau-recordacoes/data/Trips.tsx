export interface Photo {
    id: number,
    uri: string,
    description: string,
    idtrip: number
}

export interface Trip {
    id: number,
    name: string,
    year: number
}

export const photos:Photo[] = [
    { id: 1, uri: 'https://naosoudesp.com.br/wp-content/uploads/ccbb_sao_paulo-300x300.webp', description: 'São Paulo 02', idtrip: 1 },
    { id: 2, uri: 'https://marinhoturismobuzios.com.br/wp-content/uploads/2017/10/rio-de-janeiro-300x300.jpg', description: 'Cristo', idtrip: 2 },
    { id: 3, uri: 'https://fortalezadreams.com/wp-content/uploads/2023/07/lagoinha_ceara_praia-16883825-300x300.jpeg', description: 'Fortal 2', idtrip: 3 },
    { id: 4, uri: 'https://crescencio.eng.br/wp-content/uploads/2018/09/featured_image-1-300x300.jpg', description: 'São Paulo 01', idtrip: 1 },
    { id: 5, uri: 'https://www.livemoretravelmore.com/wp-content/uploads/2019/01/pan-de-azucar-1024x640-300x300.jpg', description: 'Pão de Açucar', idtrip: 2 },
    { id: 6, uri: 'https://www.livemoretravelmore.com/wp-content/uploads/2021/02/20181121_Brazil_Ceara_Fortaleza_3Praias_0044-300x300.jpg', description: 'Fortal 01', idtrip: 3 },
  ];

export const trips:Trip[] = [
    { id: 1, name: 'São Paulo', year: 2022 },
    { id: 2, name: 'Rio de Janeiro', year: 2023 },
    { id: 3, name: 'Fortaleza', year: 2024 },
    { id: 4, name: 'Natal', year: 2024 },
];