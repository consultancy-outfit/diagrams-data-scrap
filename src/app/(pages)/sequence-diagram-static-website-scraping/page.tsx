"use client";

import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Box, Button, Stack, Typography } from '@mui/material';
import { diagramImage, SequenceDiagramStaticWebsiteScraping } from '@/assets';
import React, { useCallback, useRef, useState } from "react";
import SingleImgMapPage from '@/components/signle-img-map-page';
import { colorLegends, CommonBackIcon, MultiBackIcon } from '@/assets/common-assets';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
    const [isOpen, setIsOpen] = useState(false);
    const legendRef = useRef<HTMLDivElement>(null);

    const onBackIconClick = useCallback(() => {
        router.push("/complete-developers-flow-scraping-static-websites");
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
                        Sequence Diagram for Static Website Scraping
                    </Typography>
                </Stack>
            </Stack>
            <Typography sx={{ color: '#5A5867', fontSize: '22px', fontWeight: 700, mt: 2 }}>
                Sequence Diagram for Static Website Scraping
            </Typography>
            <SingleImgMapPage
                areas={areas}
                image={SequenceDiagramStaticWebsiteScraping}
            />
        </Box>
    )
}

export default ProductFeature2ndRelease;