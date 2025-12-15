# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "Arwen"
  spec.version       = "1.0.0"
  spec.authors       = ["Arwen"]
  spec.email         = ["Arwen_site@proton.me"]

  spec.summary       = " "
  spec.homepage      = "https://github.com/Example25463/Example2342"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", ">= 3.8.5"

  spec.add_development_dependency "bundler", "~> 2.0.1"
  spec.add_development_dependency "rake", "~> 12.0"
end
