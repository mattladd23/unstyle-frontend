# Unstyle Frontend

This is the Next.js/TypeScript frontend for unstyle.dev — a lightning-fast CSS reference tool. This frontend works in tandem with the [unstyle-api](https://github.com/mattladd23/unstyle-api) to power [unstyle.dev](https://unstyle.dev/). Feel free to head over and check it out if you haven't already.

## Welcome

Thank you for dropping by to find out more about Unstyle. Keep reading to learn about the following:

- :fist:[Unstyle's Purpose](#fist-unstyles-purpose)
- :key:[Core features](#key-unstyles-core-features)
- :mega:[USP](#mega-unstyles-usp)
- :earth_africa:[Positive environmental impact](#earth_africa-a-greener-way-to-code)
- :wrench:[How to use Unstyle](#wrench-how-to-use-unstyle)
- :hammer:[Tech Stack](#hammer-tech-stack)
- :computer:[Developer Docs](#computer-develop)


## :fist: Unstyle's Purpose

I think I know what you're thinking... "but what about the `initial` keyword?", "isn't this what reset libraries do?" or even "...ChatGPT??".

I get it, but hear me out. There are some key reasons why Unstyle could be used to complement or, dare I say it, instead of these methods.

Let's get into it.

## :key: Unstyle's Core Features

### :white_check_mark: CSS Property Lookup

Instantly search a CSS property to view its spec-defined initial value.

### :white_check_mark: Fast Live Filtering

Type to filter through a full list of CSS properties — powered by a preloaded JSON dataset for snappy results.

### :white_check_mark: Copyable Code Snippets

Each result includes a ready-to-use CSS snippet with the property’s initial value — one click to copy.

### :white_check_mark: Direct MDN Links

Quick access to the relevant [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) Web Docs page for deeper reading on any property.

### :white_check_mark: Spec-Based Accuracy

All values are sourced directly from MDN's definitions and the official CSS specifications — no overrides, resets, or computed styles.

### :white_check_mark: Clean UI for Rapid Reference

Minimalist, distraction-free interface built for developers who want fast answers without opening 12 tabs.

### :white_check_mark: Serverless Architecture

Built with a Next.js TypeScript frontend and a Node.js TypeScript API, deployed on AWS Lambda and API Gateway for scale and speed.

### :white_check_mark: Custom Domain & HTTPS

Fully deployed to a secure, production-ready URL with a custom domain and SSL support.

## :mega: Unstyle's USP

Unlike reset libraries that force consistent styles, this tool helps you understand what styles actually start as, giving you full control and clarity. It’s perfect for learning, debugging, or building from a blank slate — whether you’re refining your craft or showcasing your skills to future employers.

### :earth_africa: A Greener Way to Code

Unstyle is significantly better for the planet than tools like ChatGPT or full AI-powered search, especially for focused, repeat queries like “what’s the initial value of margin-left?”

Each AI query requires data center cooling, which translates to hundreds of millilitres of water per inference (e.g. ~500ml+ on average, according to some estimates).

Unstyle meanwhile makes a simple REST API call and local filtering — no AI inference, no heavy compute.

## :wrench: How to use Unstyle

Once you visit Unstyle, its functionality should become fairly self-explanatory.

You simply:

1. Enter the CSS property to find its initial (or default) value
2. The property's results will appear instantaneously
3. If you wish you can click on the copy icon to send the CSS declaration to your clipboard
4. Paste the declaration straight into your code
5. Rinse and repeat!

## :hammer: Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) (hosting)
- [Vitest](https://vitest.dev/) with some hints of [Jest](https://www.npmjs.com/package/@testing-library/jest-dom)

:cloud: See [unstyle-lambda](https://github.com/mattladd23/unstyle-lambda) for Unstyle's full AWS Tech Stack

## :computer: Develop

### Prerequisites

- Node.js installed (ideally >v20.18.0 LTS)

### Getting Started

1. Clone the repo using your protocol of choice.
2. Go into the repo `cd unstyle-frontend`.
3. Install Yarn globally `npm install --global yarn`.
4. Install Node.js dependencies `yarn install`.
5. Run the local development server `yarn dev`.
6. Go to [http://localhost:3000](http://localhost:300) to see your local frontend.

### Scripts

- `yarn dev` - starts local Next.js server
- `yarn build` - transpiles source TypeScript code into production JavaScript code
- `yarn start` - starts local Next.js server with production code
- `yarn test` - runs Vitest for unit and integration testing

---

Built by [Matt Ladd](https://www.linkedin.com/in/matt-ladd-216644121/) - always learning, always building. Any feedback is greatly appreciated :relaxed:.
