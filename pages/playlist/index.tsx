import { NextPage, InferGetServerSidePropsType, NextPageContext } from "next";
import styles from "../../styles/Home.module.css";
const YtHtmlView: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ isSuccess, data, message }) => {
  console.log("Data -> ", data);

  return (
    <>
      {/* <div style={{ fontSize: "28px !important", margin: 0, padding: 0 }}>
        <h2 style={isSuccess ? { color: "green" } : { color: "red" }}>
          {isSuccess ? "" : ""}
        </h2>
        {!isSuccess ? (
          <>
            <span>{message}</span>
            <p>
              404: wrong listId
              <br />
              403: Wrong api key
            </p>
          </>
        ) : null}
      </div> */}
      <div className={styles.cardWrap}>
        {/* Undefined error occurs if you let it float even in case of failure */}

        <div className={styles.listLeft}>
          <div className={styles.sounds}>
            <img src="/sound.png" />
          </div>
          <h5>Weekly Playlist</h5>
        </div>
        <div className={styles.listRight}>
          {isSuccess ? (
            <ul className={styles.grid}>
              {data.items.map(
                ({
                  id,
                  snippet,
                }: {
                  id: string;
                  snippet: {
                    title: string;
                    thumbnails: {
                      maxres: {
                        url: string;
                      };
                    };
                    resourceId: {
                      videoId: string;
                    };
                  };
                }) => {
                  const { title, thumbnails, resourceId } = snippet;
                  const { maxres } = thumbnails;
                  return (
                    <a
                      key={id}
                      href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                      target="_blank"
                    >
                      <li
                        className={styles.card}
                        // style={{ listStyle: "none" }}
                        style={
                          title === "Private video"
                            ? { display: "none" }
                            : { display: "block" }
                        }
                      >
                        <p>
                          <img
                            width={"100%"}
                            src={maxres?.url || "/music1.jpg"}
                            alt={title}
                            style={{ display: "block" }}
                          />
                        </p>
                        <h3>{title}</h3>
                      </li>
                    </a>
                  );
                }
              )}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  try {
    const url = new URL(
      process.env.apiBaseUrl ||
        "https://www.googleapis.com/youtube/v3/playlistItems"
    );
    url.searchParams.append("maxResults", "50");
    url.searchParams.append("playlistId", "PLYklzdmxCac84tLPqRDosppzIdhBLRpdy");
    url.searchParams.append("part", "snippet");
    url.searchParams.append("key", process.env.apiKey || "");
    console.log("URL->", url.href);

    const response = await fetch(url.href);
    const data = await response.json();
    console.log("Data from side -> ", data);
    if (!response.ok)
      return {
        props: {
          isSuccess: false,
          data: null,
          message: response.status.toString(),
        },
      };

    return {
      props: {
        isSuccess: true,
        data,
        message: "",
      },
    };
  } catch (e) {
    return {
      props: {
        isSuccess: false,
        data: null,
        message: `Request error: ${e?.toString()}`,
      },
    };
  }
};

// Export component
export default YtHtmlView;
