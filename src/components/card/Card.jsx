
import { useScroll } from "@use-gesture/react";
import axios from "axios";
import { useState, useEffect} from "react";
import { animated, useSpring } from "react-spring";
import corazon from "./img/corazon.jpg";
import corazonbonito from "./img/corazonbonito.jpg";
import "./styles.scss";
import confetti from "canvas-confetti";
import { Card as CardNextUI, Col, Row, Button, Text } from "@nextui-org/react";
const clamp = (value, clampAt) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  

  const movies = [
    corazon,
      corazonbonito,
      corazon,
      corazonbonito,
      corazon,
      corazonbonito,
      corazon,
        corazonbonito,
  ];

const TodowishList = [
    {
        id: 1,
        title: "Family",
        description: "Give a gift to my family",
        image: corazon,
        tags: ["tag1", "tag2", "tag3"],
    },
    {
        id: 2,
        title: "Friends",
        description: "Give a gift to my friends",
        image: corazonbonito,
        tags:["tag1", "tag2", "tag3"]
    },
    {
        id: 3,
        title: "Work",
        description: "Give a gift to my work",
        image: corazon,
        tags:["tag1", "tag2", "tag3"]
    },
    {
        id: 4,
        title: "Holidays",
        description: "Give a gift on holidays",
        image: corazonbonito,
        tags:["tag1", "tag2", "tag3"]
    },
    {
        id: 5,
        title: "Birthday",
        description: "Give a gift to my birthday",
        image: corazon,
        tags:["tag1", "tag2", "tag3"]
    },
    {
        id: 6,
        title: "Wedding",
        description: "Give a gift to the wedding",
        image: corazonbonito,
        tags:["tag1", "tag2", "tag3"]

    },
    {
        id: 7,
        title: "Baby",
        description: "Give a gift to my baby",
        image: corazon,
        tags:["tag1", "tag2", "tag3"]
    },
    {
        id: 8,
        title: "Christmas",
        description: "Give a gift in christmas",
        image: corazonbonito,
        tags:["tag1", "tag2", "tag3"]
    },
    {
        id: 9,
        title: "Valentine",
        description: "Give a gift on valentine",
        image: corazon,
        tags:["tag1", "tag2", "tag3"]
    },
    {
        id: 10,
        title: "Anniversary",
        description: "Give a gift in my anniversary",
        image: corazonbonito,
        tags:["tag1", "tag2", "tag3"]
    },

  ]
export const Card = () => {
    const bind = useScroll(event => {
        set({
          transform: `perspective(500px) rotateY(${
            event.scrolling ? clamp(event.delta[0]) : 0
          }deg)`
        });
    });
    
    const [style, set] = useSpring(() => ({
        // transorm and make the card bigger

        transform: `perspective(500px) rotateY(0deg)`,

        
    }));
    const [randomImage, setrandomImage] = useState([
        corazon,
        corazonbonito,
        
    ])

    
  return (
      <>
          <div className="container" {...bind()}
          
          >
        {TodowishList.map(wishlist => (
          <animated.div
            key={wishlist.id}
            className="card"
            style={{
                ...style,
               //make a random background color
                // backgroundImage: `url(${src})`,
                }}
            >
                <CardNextUI
                    cover css={{
                        w: "100%", p: 0,
                    }}
                >
                    <CardNextUI.Header
                    css={{  position: "absolute", zIndex: 1, top: 5 }}
                    >
                         <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
            {wishlist.title}	
        </Text>
        <Text h3 color="white">
            {wishlist.description}
        </Text>
      </Col>
                    </CardNextUI.Header>
                    <CardNextUI.Body>
                        <CardNextUI.Image
                            src={wishlist.image}
                            height={300}
                            width={"100%"}
                            cover
                            alt="Card image cap"
                        />
                    </CardNextUI.Body>
                    <CardNextUI.Footer
                          blur
      css={{
        position: "absolute",
        bgBlur: "#0f1114",
        borderTop: "$borderWeights$light solid $gray700",
        bottom: 0,
        zIndex: 1,
      }}
                    >
                        <Row>
                            <Col>
                                <Row>
                                    <Col span={3}>
                                        <CardNextUI.Image
                                            src={wishlist.image}
                                            css={{ background: "black" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
                                    </Col>
                                </Row>
                            </Col>
                            
                            <Col>
                                <Row justify="flex-end">
                                    
                                    {wishlist.tags.map(tag => (
                                        <Button
                                            flat
                                            auto
                                            rounded
                                            css={{
                                                color: "#94f9f0",
                                                bg: "#94f9f026",
                                                margin: "0 5px",
                                            }}
                                            onClick={() => {
                                                confetti({
                                                    zIndex: 999,
                                                    particleCount: 200,
                                                    spread: 400,
                                                    angle: -100,
                                                    origin: {
                                                        x: Math.random(),
                                                        y: Math.random(),
                                                    }
                                                })
                                            }
                                            }
                                        >
                                            <Text
                                                css={{
                                                    color: "inherit"
                                                
                                                }}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                            >
                                                {tag}
                                            </Text>
                                        </Button>
                                    ))}
                                        
            
          </Row>
        </Col>

                        </Row>

                    </CardNextUI.Footer>
                </CardNextUI>
                
          </animated.div>
        ))}
      </div>
    </>
  )
}
