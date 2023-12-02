// import { h } from "preact";

import Logo from "../../../assets/Logo.svg";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Center, Container, Group, Menu } from "@mantine/core";
import { ChevronDown } from "lucide-preact";
import "./Header.css";
import { useState } from "preact/hooks";

const links = [
    { link: "/", label: "Home" },
    { link: "/thoughts", label: "Thoughts" },
    {
        link: "/showcase",
        label: "Showcase",
        links: [
            { link: "/taobm", label: "The Art of being Mused" },
            { link: "/chm", label: "Conch-head Manuscript" },
            { link: "/asunder", label: "Asunder" },
            { link: "/ipdwac", label: "If putting dots were a crime" },
        ],
    },
    { link: "/contact", label: "Contact" },
];
const Header: preact.FunctionalComponent = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map(link => {
        const menuItems = link.links?.map(item => (
            <Menu.Item
                key={item.link}
                classNames={{ item: "custom-menu-item" }}
            >
                <p className="custom-menu-item-label">{item.label}</p>
            </Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    transitionProps={{ exitDuration: 0 }}
                    withinPortal
                >
                    <Menu.Target>
                        <a
                            href={link.link}
                            className="link"
                            data-active={active === link.link || undefined}
                            onClick={(event) => 
                                {event.preventDefault();
                                setActive(link.link)
                            }}
                        >
                            <Center>
                                <span className="linkLabel">{link.label}</span>
                                <ChevronDown size={16} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className="link"
                data-active={active === link.link || undefined}
                onClick={(event) => {
                    event.preventDefault()
                    setActive(link.link)
                }}
            >
                {link.label}
            </a>
        );
    });

    return (
        <header className="header">
            <Container size="xl" className="inner">
                <img src={Logo} className="logo" />
                <Group gap={5} visibleFrom="sm" className="links">
                    {items}
                </Group>

                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="xs"
                    size="sm"
                />
            </Container>
        </header>
    );
};

export default Header;
