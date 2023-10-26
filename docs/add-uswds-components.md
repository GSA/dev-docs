---
sidebar_position: 2
---

# Add USWDS components

GSA websites must include the following **core USWDS components**.

## Banner

Identifies GSA websites as official websites of the United States government.

Create a file at `src/components/banner.js`:

```jsx title="src/components/banner.js"
import React from "react";
import UsFlagSmall from "../../node_modules/@uswds/uswds/dist/img/us_flag_small.png";
import IconDotGov from "../../node_modules/@uswds/uswds/dist/img/icon-dot-gov.svg";
import IconHttps from "../../node_modules/@uswds/uswds/dist/img/icon-https.svg";

export default function Banner() {
  return (
    <section
      className="usa-banner"
      aria-label="Official website of the United States government"
    >
      <div className="usa-accordion">
        <header className="usa-banner__header">
          <div className="usa-banner__inner margin-x-0">
            <div className="grid-col-auto">
              <img
                aria-hidden="true"
                className="usa-banner__header-flag"
                src={UsFlagSmall}
                alt=""
              />
            </div>
            <div
              className="grid-col-fill tablet:grid-col-auto"
              aria-hidden="true"
            >
              <p className="usa-banner__header-text">
                An official website of the United States government
              </p>
              <p className="usa-banner__header-action">Here’s how you know</p>
            </div>
            <button
              type="button"
              className="usa-accordion__button usa-banner__button"
              aria-expanded="false"
              aria-controls="gov-banner-default-default"
            >
              <span className="usa-banner__button-text">
                Here’s how you know
              </span>
            </button>
          </div>
        </header>
        <div
          className="usa-banner__content usa-accordion__content"
          id="gov-banner-default-default"
          hidden
        >
          <div className="grid-row grid-gap-lg">
            <div className="usa-banner__guidance tablet:grid-col-6">
              <IconDotGov
                className="usa-banner__icon usa-media-block__img"
                role="img"
                alt=""
                aria-hidden="true"
              />
              <div className="usa-media-block__body">
                <p>
                  <strong>Official websites use .gov</strong>
                  <br />A <strong>.gov</strong> website belongs to an official government
                  organization in the United States.
                </p>
              </div>
            </div>
            <div className="usa-banner__guidance tablet:grid-col-6">
              <IconHttps
                className="usa-banner__icon usa-media-block__img"
                role="img"
                alt=""
                aria-hidden="true"
              />
              <div className="usa-media-block__body">
                <p>
                  <strong>Secure .gov websites use HTTPS</strong>
                  <br />A <strong>lock</strong> (<span className="icon-lock">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="64"
                      viewBox="0 0 52 64"
                      className="usa-banner__lock-image"
                      role="img"
                      aria-labelledby="banner-lock-description-default"
                      focusable="false"
                    >
                      <title id="banner-lock-title-default">Lock</title>
                      <desc id="banner-lock-description-default">
                        Locked padlock icon
                      </desc>
                      <path
                        fill="#000000"
                        fillRule="evenodd"
                        d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                      />
                    </svg>{" "}
                  </span>) or <strong>https://</strong> means you’ve safely connected
                  to the .gov website. Share sensitive information only on official,
                  secure websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

Learn more about the **[USWDS banner component](https://designsystem.digital.gov/components/banner/)**.

## Identifier

Identifies GSA as the parent agency and displays **[links required by federal laws and policies](./check-required-links.md#identifier-links)**.

Create a file at `src/components/identifier.js`:

```jsx title="src/components/identifier.js"
import React from "react";
import Logo from "@site/static/img/logo.png";

export default function Identifier() {
  return (
    <div className="usa-identifier padding-y-4">
      <section
        className="usa-identifier__section usa-identifier__section--masthead"
        aria-label="Agency identifier,"
      >
        <div className="usa-identifier__container">
          <div className="usa-identifier__logos">
            <a href="https://www.gsa.gov" className="usa-identifier__logo">
              <img
                className="usa-identifier__logo-img"
                src={Logo}
                alt="GSA logo"
                role="img"
              />
            </a>
          </div>
          <section
            className="usa-identifier__identity"
            aria-label="Agency description,"
          >
            <p className="usa-identifier__identity-domain">tech.gsa.gov</p>
            <p class="usa-identifier__identity-disclaimer">
              An official website of the{" "}
              <a href="https://www.gsa.gov">
                U.S. General Services Administration
              </a>
            </p>
          </section>
        </div>
      </section>
      <nav
        class="usa-identifier__section usa-identifier__section--required-links"
        aria-label="Important links"
      >
        <div class="usa-identifier__container">
          <ul class="usa-identifier__required-links-list">
            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsa.gov/about-us"
                class="usa-identifier__required-link usa-link"
              >
                About GSA
              </a>
            </li>

            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsa.gov/website-information/accessibility-statement"
                class="usa-identifier__required-link usa-link"
              >
                Accessibility statement
              </a>
            </li>

            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsa.gov/reference/freedom-of-information-act-foia"
                class="usa-identifier__required-link usa-link"
              >
                FOIA requests
              </a>
            </li>

            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsa.gov/about-us/organization/office-of-civil-rights/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002"
                class="usa-identifier__required-link usa-link"
              >
                No FEAR Act data
              </a>
            </li>

            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsaig.gov/"
                class="usa-identifier__required-link usa-link"
              >
                Office of the Inspector General
              </a>
            </li>

            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsa.gov/reference/reports/budget-performance"
                class="usa-identifier__required-link usa-link"
              >
                Performance reports
              </a>
            </li>

            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsa.gov/website-information/website-policies"
                class="usa-identifier__required-link usa-link"
              >
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section
        className="usa-identifier__section usa-identifier__section--usagov"
        aria-label="U.S. government information and services,"
      >
        <div className="usa-identifier__container">
          <div className="usa-identifier__usagov-description">
            Looking for U.S. government information and services?
          </div>{" "}
          <a href="https://www.usa.gov/" className="usa-link">
            Visit USA.gov
          </a>
        </div>
      </section>
    </div>
  );
}
```

Learn more about the **[USWDS identifier component](https://designsystem.digital.gov/components/identifier/)**.
