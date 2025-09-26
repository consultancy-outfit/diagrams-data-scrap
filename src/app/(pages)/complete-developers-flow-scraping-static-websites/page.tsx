"use client";

import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Box, Button, Stack, Typography } from '@mui/material';
import { diagramImage } from '@/assets';
import React, { useCallback } from "react";
import SingleImgMapPage from '@/components/signle-img-map-page';
import { CommonBackIcon, } from '@/assets/common-assets';

const areas = [
    {
        alt: "",
        title: "",
        href: "/",
        coords: "",
        shape: "",
        target: "",
        type: "link" as "link",
    },
];


const ProductFeature2ndRelease = () => {
    const router = useRouter();

    const onBackIconClick = useCallback(() => {
        router.push("/technical-perspectives");
    }, [router]);


    return (
        <Box p={{ md: 3, xs: 2 }}>
            <Stack
                flexDirection="row"
                justifyContent="space-between"
                flexWrap={"wrap"}
                mt={2}
                mb={4}
            >
                <Stack flexDirection="row" alignItems="center">
                    <Image
                        src={CommonBackIcon}
                        alt='back icon'
                        width={40}
                        height={40}
                        onClick={onBackIconClick}
                        style={{
                            cursor: "pointer",
                        }}
                    />
                    <Typography sx={{ color: '#5A5867', fontSize: '22px', fontWeight: 700, ml: 2 }}>
                        Static  Website
                    </Typography>
                </Stack>
                <Button sx={{ background: '#5A5867', color: '#fff' }} onClick={() => { router.push('/sequence-diagram-static-website-scraping') }}>Sequence Process</Button>
            </Stack>

            <SingleImgMapPage
                areas={areas}
                image={diagramImage}
            />
        </Box>
    )
}

export default ProductFeature2ndRelease;