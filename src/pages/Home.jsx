import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";

function Home() {
  return (
    <section className="bg-gray-50">
      <Container className="grid min-h-[520px] items-center gap-10 py-16 md:grid-cols-2">
        {/* Hero Content */}
        <div>
          <p className="mb-3 font-semibold text-blue-600">
            Welcome to UniQuick Mart
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Everything You Need, Delivered with Ease
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Discover quality products, simple shopping and a fast checkout
            experience—all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/shop">
              Shop Now
            </Button>

            <Button to="/shop" variant="secondary">
              Explore Products
            </Button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="flex min-h-80 items-center justify-center rounded-3xl bg-blue-100 p-8">
          <div className="text-center">
            <div className="text-7xl">🛍️</div>

            <p className="mt-4 text-xl font-semibold text-blue-900">
              Smart Shopping Starts Here
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Home;