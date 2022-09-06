import prettier from "prettier"

async function createFormatFileWithPrettier(content: string) {
  const prettierConfig = await prettier.resolveConfig(process.cwd())
  return prettier.format(String(content), {
    ...prettierConfig,
    parser: "typescript",
  })
}

export async function formatWithPrettierIfAvailable(content: string) {
  return createFormatFileWithPrettier(content)
}
