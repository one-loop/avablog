import React from 'react';
import { Text, Spacer, Image } from "@nextui-org/react";
import { Grid, Card } from "@nextui-org/react";
import Link from 'next/link';

const Community = () => {
  return (
    <div className="community">
      <Spacer y={2} />
      <Text h1 color="#fff">Community</Text>
      <Text b color="$accents7" size="$xl" css={{ maxWidth: "300px", marginLeft: "auto", marginRight: "auto", marginBottom: "50px", textAlign: "center" }}>Get involved in our community. Everyone is welcome!</Text>
      <Spacer y={2} />
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={4}>
          <Link href="https://instagram.com/avaevolve" css={{ textAlign: "left" }}>
            <Card css={{ minHeight: "140px", backdropFilter: "saturate(180%) blur(14px)", background: "rgba(255, 255, 255, 0.05)", padding: "16px" }} className="social-card">
              <Card.Header css={{display: "flex", padding: "0px", rowGap: "10px"}}>
                <img src="https://seeklogo.com/images/I/instagram-logo-1494D6FE63-seeklogo.com.png" height={28} width={28} />
                  <Text h5 size="$md" color="white" css={{ m: 0, marginLeft: "10px" }}>
                    Instagram
                  </Text>
              </Card.Header>
              <Spacer y={0.5}/>
              <Card.Body css={{ padding: "0px" }}>
                <Text color="$accents8">
                  For posts, news, publicity and updates.
                </Text>
              </Card.Body>

            </Card>
          </Link>
        </Grid>
        <Grid xs={12} sm={4}>
          <Link href="https://discord.gg/Yg3dVzaDqp">
            <Card css={{ minHeight: "140px", backdropFilter: "saturate(180%) blur(14px)", background: "rgba(255, 255, 255, 0.05)", padding: "16px" }} className="social-card">
              <Card.Header css={{display: "flex", padding: "0px", rowGap: "10px"}}>
                <svg height="30" viewBox="0 0 24 24" width="30">
                                                                            <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" fill="#7289DA"></path>
                                                                        </svg>
                  <Text h5 size="$md" color="white" css={{ m: 0, marginLeft: "10px" }}>
                    Discord
                  </Text>
              </Card.Header>
              <Spacer y={0.5}/>
              <Card.Body css={{ padding: "0px" }}>
                <Text color="$accents8">
                  To get involved in the community, ask questions and share tips.
                </Text>
              </Card.Body>

            </Card>
          </Link>
        </Grid>
        <Grid xs={12} sm={4}>
          <Link href="https://linkedin.com/company/ava-evolve">
            <Card css={{ minHeight: "140px", backdropFilter: "saturate(180%) blur(14px)", background: "rgba(255, 255, 255, 0.05)", padding: "16px" }} className="social-card">
              <Card.Header css={{display: "flex", padding: "0px", rowGap: "10px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                                                            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z">
                                                                            </path>
                                                                            <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z">
                                                                            </path>
                                                                        </svg>
                  <Text h5 size="$md" color="white" css={{ m: 0, marginLeft: "10px" }}>
                    LinkedIn
                  </Text>
              </Card.Header>
              <Spacer y={0.5}/>
              <Card.Body css={{ padding: "0px" }}>
                <Text color="$accents8">
                  To connect with our team members and search for available positions.
                </Text>
              </Card.Body>

            </Card>
          </Link>
        </Grid>
      </Grid.Container>
    </div>
  )
}

export default Community